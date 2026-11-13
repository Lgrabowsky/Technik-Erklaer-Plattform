import type { Access } from "payload";

/** Nur angemeldete Redakteure/Admins (Sammlung "users") */
export const isAdmin: Access = ({ req }) => req.user?.collection === "users";

/** Niemand über die API – nur der Server selbst (Local API) */
export const nobody: Access = () => false;
