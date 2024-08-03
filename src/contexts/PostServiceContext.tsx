"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { getDefaults } from 'utils/zod';
import { z } from "zod";

const addressFormSchema = z.object({
    firstName: z.string().min(1, "Обовязково вкажіть ім'я").default(""),
    lastName: z.string().min(1, "Обовязково вкажіть прізвище").default(""),
    city: z.string().min(1, "Обовязково вкажіть місто").default(""),
    region: z.string().min(1, "Обовязково вкажіть область").default(""),
    postal: z.string().min(1, "Обовязково вкажіть індекс").default(""),
    phoneNumber: z.string().default(""),
    email: z.string().email("Не коректна адреса електронної пошти").default(""),
  });

const deliveryFormSchema = z.object({
    delivery_service: z
      .string()
      .min(1, "Обовязково вкажіть службу доставки")
      .default(""),
    delivery_method: z
      .string()
      .min(1, "Обовязково вкажіть метод доставки")
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
    region: string;
    postal: string;
    phoneNumber: string;
    email: string;
}, any, undefined>;
}

const PostServiceContext = createContext<PostServiceContextType | undefined>(undefined);

interface PostServiceProviderProps {
  children: ReactNode;
}

export const PostServiceProvider = ({ children }: PostServiceProviderProps) => {

  const deliveryForm = useForm<DeliveryForm>({
      resolver: zodResolver(deliveryFormSchema),
      defaultValues: getDefaults(deliveryFormSchema),
    });

  const addressForm = useForm<AddressForm>({
      resolver: zodResolver(addressFormSchema),
      defaultValues: getDefaults(addressFormSchema),
    });

  return (
    <PostServiceContext.Provider value={{ deliveryForm, addressForm}}>
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
