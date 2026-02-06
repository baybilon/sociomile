export interface Tenant {
  id: number;
  name: string;
}

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  tenant_id?: Tenant[];
}
