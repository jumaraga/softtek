import { NO_COLABORATOR_FOUND_ERROR } from "../../../src/user/domain/errors";

export const MOCK = {
   COLABORADOR_ENCONTRADO: {
      document: "78522351",
      firstname: "Mike",
      lastname: "Ramos",
      corporativeEmail: "mike.ramos@validDomain.com",
   },
   COLABORADOR_NO_ENCONTRADO: null
};
export const RESPONSES = {
   SUCCESS: {
      message: 'usuario creado correctamente'
   },
   ERROR_COLABORADOR_NO_ENCONTRADO: NO_COLABORATOR_FOUND_ERROR

}
