export type InquiryType = "supplier" | "buyer";

export interface ContactFormData {
  inquiryType: InquiryType;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  monthlyUco: string;
  message: string;
}
