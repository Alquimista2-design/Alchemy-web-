/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  industry: string;
  year: string;
  slogan: string;
  description: string;
  detailedDescription: string;
  accentColor: string;
  accentHex: string;
  styleReference: string;
  tags: string[];
  features?: string[];
  countdownEnabled?: boolean;
  pillText?: string;
  customFont?: 'display' | 'serif' | 'sans';
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  isFeatured: boolean;
  accentColor: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}
