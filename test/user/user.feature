Feature: Create user
  Scenario Outline: Crear users that are working at the company
    Given We request the sign up endpoint <request>
    And get the colaborators from the company <colaborators>
    And verify if user already exist <user>
    When validate email domain
    Then the user is created <resultado>

    Examples:
      | request               | colaborators               | user           | resultado                   |
      | COLABORADOR_FOUND     | COLABORADOR_FOUND          | USER_NOT_EXIST | SUCCESS                     |
      | COLABORADOR_NOT_FOUND | COLABORADOR_NOT_FOUND      | USER_NOT_EXIST | ERROR_COLABORADOR_NOT_FOUND |
      | COLABORADOR_FOUND     | COLABORADOR_FOUND          | USER_EXIST     | ERROR_USER_EXIST            |
      | COLABORADOR_FOUND     | COLABORATOR_INVALID_DOMAIN | USER_NOT_EXIST | ERROR_INVALID_DOMAIN        |
