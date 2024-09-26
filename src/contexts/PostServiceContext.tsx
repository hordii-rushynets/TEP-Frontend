"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { getDefaults } from 'utils/zod';
import { z } from "zod";
import { useLocalization } from './LocalizationContext';

export interface PostServiceContextType {
  deliveryForm: UseFormReturn<{
    delivery_service: string;
    delivery_method: string;
    department: string;
    street: string;
    house: string;
    flat: string;
}, any, undefined>;
  addressForm: UseFormReturn<{
    firstName: string;
    lastName: string;
    city: string;
    district: string;
    region: string;
    postal: string;
    phoneNumber: string;
    email: string;
}, any, undefined>;
  cost: number;
  setCost: (v: number) => void;
}

const PostServiceContext = createContext<PostServiceContextType | undefined>(undefined);

interface PostServiceProviderProps {
  children: ReactNode;
}

const addressFormSchema = z.object({
  firstName: z.string().min(1, "").default(""),
  lastName: z.string().min(1, "").default(""),
  city: z.string().min(1, "").default(""),
  district: z.string().min(1, "").default(""),
  region: z.string().min(1, "").default(""),
  postal: z.string().min(1, "").default(""),
  phoneNumber: z.string().default(""),
  email: z.string().email("").default(""),
});

const deliveryFormSchema = z.object({
    delivery_service: z
      .string()
      .min(1, "")
      .default(""),
    delivery_method: z
      .string()
      .min(1, "")
      .default(""),
    department: z
      .string()
      .default(""),
    street: z
      .string()
      .default(""),
    house: z
      .string()
      .default(""),
    flat: z
      .string()
      .default(""),
});

export type AddressForm = z.infer<typeof addressFormSchema>;
export type DeliveryForm = z.infer<typeof deliveryFormSchema>;

export const PostServiceProvider = ({ children }: PostServiceProviderProps) => {

  const { staticData } = useLocalization();

  const addressFormSchema = z.object({
    firstName: z.string().min(1, staticData.forms.firstNameError).default(""),
    lastName: z.string().min(1, staticData.forms.lastNameError).default(""),
    city: z.string().min(1, staticData.forms.cityError).default(""),
    district: z.string().min(1, staticData.forms.districtError).default(""),
    region: z.string().min(1, staticData.forms.regionError).default(""),
    postal: z.string().min(1, staticData.forms.postalError).default(""),
    phoneNumber: z.string().default(""),
    email: z.string().email(staticData.forms.emailError).default(""),
  });

  const deliveryFormSchema = z.object({
      delivery_service: z
        .string()
        .min(1, staticData.forms.deliveryServiceError)
        .default(""),
      delivery_method: z
        .string()
        .min(1, staticData.forms.deliveryMethodError)
        .default(""),
      department: z
        .string()
        .default(""),
      street: z
        .string()
        .default(""),
      house: z
        .string()
        .default(""),
      flat: z
        .string()
        .default(""),
  });

  type AddressForm = z.infer<typeof addressFormSchema>;
  type DeliveryForm = z.infer<typeof deliveryFormSchema>;

  const deliveryForm = useForm<DeliveryForm>({
      resolver: zodResolver(deliveryFormSchema),
      defaultValues: getDefaults(deliveryFormSchema),
    });

  const addressForm = useForm<AddressForm>({
      resolver: zodResolver(addressFormSchema),
      defaultValues: getDefaults(addressFormSchema),
    });

  const [cost, setCost] = useState(0);

  return (
    <PostServiceContext.Provider value={{ deliveryForm, addressForm, cost, setCost}}>
      {children}
    </PostServiceContext.Provider>
  );
};

export const usePostService = (): PostServiceContextType => {
  const context = useContext(PostServiceContext);
  if (!context) {
    throw new Error('usePostService must be used within an PostServiceProvider');
  }
  return context;
};
