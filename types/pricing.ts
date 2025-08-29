export type Offer = {
  text: string;
  status: "active" | "inactive";
};

export type PricingPackage = {
  packageName: string;
  price: string;
  subtitle: string;
  offers: Offer[];
};

export type ServiceCategory = {
  name: string;
  packages: PricingPackage[];
};

export type AdditionalService = {
  name: string;
  price: string;
  description: string;
};
