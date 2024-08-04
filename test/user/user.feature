Feature: Create user
  Scenario Outline: Crear users that are working at the company
    Given Se solicita el servicio en vista de registro <request>
    And se obtiene los colaboradores de la empresa <colaborador>
    When se valida dominio del correo
    Then se crea el usuario <resultado>

    Examples:
      | request                                 | colaborador               | resultado                       |
      | DOCUMENTO_DE_COLABORADOR_ACTIVO         | COLABORADOR_ENCONTRADO    | SUCCESS                         |
      | DOCUMENTO_NO_PERTENECIENTE_A_LA_EMPRESA | COLABORADOR_NO_ENCONTRADO | ERROR_COLABORADOR_NO_ENCONTRADO |
