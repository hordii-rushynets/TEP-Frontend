import { ConversionsDAOService } from "daos/conversionsDAO";
import { getUserIP } from "utils/helpers";

type EventName = "PageView" | 
                 "ViewCategory" | 
                 "InitiateCheckout" |
                 "Purchase" |
                 "Search" |
                 "SubmitApplication" |
                 "EmailSubscription"


export class ConversionsService {
    private daoService: ConversionsDAOService;

    constructor() {
        this.daoService = new ConversionsDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async sendConversion(event_name: EventName, custom_data?: Object): Promise<void> {
        const fbp = document.cookie.match(/_fbp=([^;]*)/)?.[1] || '';
        const fbc = document.cookie.match(/_fbc=([^;]*)/)?.[1] || '';
        const ip = await getUserIP();
        const time = Date.now();
        const agent = navigator.userAgent || "";
        const url = window.location.href;

        if (sessionStorage.getItem(url) === "true" && (event_name === "PageView" || event_name === "ViewCategory")) {
            return;
        }

        const body = {
            event_name: event_name,
            event_time: time,
            event_source_url: url,
            client_ip_address: ip,
            client_user_agent: agent,
            fbp: fbp,
            fbc: fbc,
            custom_data: custom_data || {},
        };

        const response = await this.daoService.sendConversion(body);
        if (response.ok) {
            sessionStorage.setItem(url, 'true');
        }
    }
}
