import Image from "next/image";
import Link from "next/link";
import { BiDislike, BiLike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";

import { ImageSquare } from "common/ImageSquare";
import { ButtonBase, Title } from "common/ui";
import { Star } from "common/ui/icons/Star";
import NoAvatarIMG from "components/static/noavatar.png";

import { Feedback } from "app/information-for-buyers/feedbacks/interfaces";
import { useLocalization } from "contexts/LocalizationContext";
import { Category } from "contexts/CategoriesContext";
import { FeedbackService } from "app/information-for-buyers/feedbacks/services";
import { useAuth } from "contexts/AuthContext";
import { useRouter } from 'next/navigation';
import { useNotificationContext } from "contexts/NotificationContext";

export type FeedbackCardProps = {
  feedback: Feedback;
  refresh: () => void;
};

export function FeedbackCard({ feedback, refresh }: FeedbackCardProps) {
  const {localization, staticData} = useLocalization();
  const authContext = useAuth();
  const router = useRouter();
  const { setIsOpen, setText } = useNotificationContext();

  const feedbackService = new FeedbackService();

  const getTimeToShow = (time: string) : string => {
    const date = new Date(time);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear().toString()}`
  }

  return (
    <div
      className={
        "flex max-w-[808px] flex-col gap-y-6 overflow-hidden rounded-3xl bg-tep_gray-200 p-8"
      }
    >
      <div
        className={
          "flex flex-col items-start justify-between gap-y-6 md:flex-row"
        }
      >
        <div className={"flex items-center gap-x-4"}>
          <div className={"relative size-12 overflow-hidden rounded-full"}>
            <Image
              className={"select-none object-cover"}
              aria-hidden
              fill
              src={feedback.tep_user.profile_picture ?? NoAvatarIMG}
              alt={"Avatar image"}
              sizes="100vw, 50vw, 33vw"
            />
          </div>
          <div>
            <Title size={"xl"}>{feedback.tep_user.first_name} {feedback.tep_user.last_name}</Title>
            <span
              className={"block text-[10px] text-tep_gray-700 lg:font-light"}
            >
              {getTimeToShow(feedback.creation_time)}
            </span>
          </div>
        </div>
        <div className={"flex gap-x-2"}>
          {Array.from({ length: 5 }).map((_, Idx) => (
            <Star key={Idx} className={cn({ "fill-black": Idx < feedback.evaluation })} />
          ))}
        </div>
      </div>
      <div>
        <Link
          href={`${MainUrl.getGoods()}/${feedback.product.category.slug}`}
          className={
            "mb-6 inline-block transition-colors hover:text-tep_blue-500 md:mb-4"
          }
        >
          <span
            className={"rounded-full bg-white px-4 py-1 text-[10px] font-bold"}
          >
            {feedback.product.category[`title_${localization}` as keyof Category] as string}
          </span>
        </Link>
        <p className={"text-sm lg:font-extralight"}>{feedback.text}</p>
      </div>
      {!!feedback.feedback_images?.length && (
        <div className={"flex flex-wrap gap-2"}>
          {feedback.feedback_images.map((image, Idx) => (
            <div key={Idx} className={"w-[118px]"}>
              <ImageSquare
                classes={{ wrapper: "rounded-2xl" }}
                source={image.image}
              />
            </div>
          ))}
        </div>
      )}
      <div className={"mt-2 flex gap-x-2"}>
        <div className={"flex flex-col items-center text-tep_gray-700"}>
          <ButtonBase
            className={{ button: "transition-colors hover:text-tep_blue-400" }}
            onClick={() => {
              feedbackService.likeFeedback(feedback.id, authContext).then(status => {
                if (status === 401) {
                  setText(staticData.auth.notifications.unautorized);
                  setIsOpen(true);
                  router.push('/sign-in');
                }
                refresh()
              });
            }}
          >
            {feedback.user_vote !== null && feedback.user_vote ? <BiSolidLike className={"size-4"} /> : <BiLike className={"size-4"} />}
          </ButtonBase>
          <span className={"text-[10px] font-light"} >
            {feedback.like_number}
          </span>
        </div>
        <div className={"flex flex-col items-center text-tep_gray-700"}>
          <ButtonBase
            className={{ button: "transition-colors hover:text-tep_blue-400" }}
            onClick={() => {
              feedbackService.dislikeFeedback(feedback.id, authContext).then(status => {
                if (status === 401) {
                  setText(staticData.auth.notifications.unautorized);
                  setIsOpen(true);
                  router.push('/sign-in');
                }
                refresh()
              });
            }}
          >
            {feedback.user_vote !== null && !feedback.user_vote ? <BiSolidDislike className={"size-4"} /> : <BiDislike className={"size-4"} />}
          </ButtonBase>
          <span className={"text-[10px] font-light"} >
            {feedback.dislike_number}
          </span>
        </div>
      </div>
    </div>
  );
}
