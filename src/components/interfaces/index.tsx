export interface Ialert {
  loading?: boolean;
  success?: string;
  error?: string;
}

export interface Ievent {
  target: { name: string; value: string };
}

export interface Itoast {
  title: string;
  body: string;
}
export interface ILogin {
  email: string;
  password: string;
}

export interface Ialert {
  type: string;
  payload: {};
}

export interface Iaction<Type> {
  type: string;
  payload: Type;
}

export interface Istate {
  auth: Iauth;
  alert: Ialert;
}

export interface Iuser {
  username: string;
  email: string;
}
export interface Iauth {
  user?: Iuser;
  access_token?: string;
}
export interface IprivateRouter {
  component: Function;
  path: string;
}
export interface Iproducts {
  id: number;
  title: string;
  price: number;
  
}
