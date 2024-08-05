import { INVALID_DOMAIN_ERROR, NO_COLABORATOR_FOUND_ERROR, USER_EXIST_ERROR } from "../../../src/user/domain/errors";

export const MOCK = {
   COLABORADOR_FOUND: {
      document: "78522351",
      firstname: "Mike",
      lastname: "Ramos",
      corporativeEmail: "mike.ramos@validDomain.com",
   }, COLABORATOR_INVALID_DOMAIN: {
      document: "78522351",
      firstname: "Mike",
      lastname: "Ramos",
      corporativeEmail: "mike.ramos@inValidDomain.com",
   },
   COLABORADOR_NOT_FOUND: null,
   USER_EXIST: { status: 'ACTIVE', enabled: true },
   USER_NOT_EXIST: null
};
export const RESPONSES = {
   SUCCESS: {
      message: 'usuario creado correctamente'
   },
   ERROR_COLABORADOR_NOT_FOUND: NO_COLABORATOR_FOUND_ERROR,
   ERROR_USER_EXIST: USER_EXIST_ERROR,
   ERROR_INVALID_DOMAIN: INVALID_DOMAIN_ERROR
}
