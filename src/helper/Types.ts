interface School {
  id?: number | null;
  schoolLogo: string; // URL or file path to the logo image
  schoolName: string;
  affiliation: string;
  schoolMobileNumber: string;
  principalName: string;
  schoolType: string;
  identificationNumber: string;
  schoolMailId: string;
  principalContactEmail: string;
  schoolAddress: string;
  schoolCity: string;
  schoolPinCode: string;
  userName: string;
  createPassword: string;
  confirmPassword: string;
  termsCondition: boolean;
}
export type { School };

export type EditSchoolTypes = {
  id?: number | null; 
  schoolLogo: string;
  schoolName: string;
  affiliation: string;
  schoolMobileNumber: string;
  principalName: string;
  schoolType: string;
  identificationNumber: string;
  schoolMailId: string;
  principalContactEmail: string;
  schoolAddress: string;
  schoolCity: string;
  schoolPinCode: string;
};

export type Plan = {
  id?: number | null;
  planName: string;
  planNo: string;
  planCreationDate: string;
  currentMode: string;
  planUsageLimit: string;
  features: string;
  trialPeriodLimit: string;
  billingCycle: string;
  codes: string;
  visibility: string;
  description: string;
  paymentOption: string;
  planDate:string;
  planMode: string;
  pricing:string;
};

export type login = {
  email: string;
  password: string;
};

// export type setting = {
//   name: string;
//   contactInfo: string;
//   img:string;
// }
