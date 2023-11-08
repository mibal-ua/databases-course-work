# Тестування працездатності системи

## Попередні умови й заповнення бази

**Перед тестуванням сервісу в базі даних вже були дані щодо моїх сутностей (Assignment, TaskComment)**

Заповнення таблиці Assignment:

<img width="1077" alt="Screenshot 2023-11-08 at 12 37 37" src="https://github.com/mibal-ua/databases-course-work/assets/59470968/73ce0578-3ab7-4604-8a79-ab7e156623fe">

Заповнення таблиці Task_comment:

<img width="824" alt="Screenshot 2023-11-08 at 12 37 41" src="https://github.com/mibal-ua/databases-course-work/assets/59470968/8e4fb49e-ff62-40f8-9e71-dcf86aeb339f">

## Файл з http тестами

**В каталозі є файл `tests.http` з запитами для тестування**

```http request
### ------------------------ Assignment ------------------------

### отримати всі

GET http://localhost:8080/assignments

### отримати за id=1

GET http://localhost:8080/assignments/1

### послати та створити

POST http://localhost:8080/assignments
Content-Type: application/json

{
  "localDateTime": "2023-11-07T21:04:00",
  "collaboratorId": 1,
  "taskId": 2
}

### змінити тільки поле 'collaboratorId'

PATCH http://localhost:8080/assignments/1
Content-Type: application/json

{
  "collaboratorId": 3
}

### видалити

DELETE http://localhost:8080/assignments/1




### ------------------------ TaskComment ------------------------


### отримати всі

GET http://localhost:8080/taskComments

### отримати за id=1

GET http://localhost:8080/taskComments/4

### послати та створити

POST http://localhost:8080/taskComments
Content-Type: application/json

{
  "subject": "TEST SUBJECT",
  "text": "TEXT",
  "localDateTime": "2023-11-07T21:04:00",
  "authorId": 2,
  "taskId": 2
}

### змінити тільки поле 'text'

PATCH http://localhost:8080/taskComments/4
Content-Type: application/json

{
  "text": "UPDATED TEXT"
}

### видалити

DELETE http://localhost:8080/taskComments/1
```

## Результати тестування

### Test 1: отримати всі

**Отримати всі `Assignment`s**

```http request
GET http://localhost:8080/assignments
```

Результат:
```json
{
  "_embedded": {
    "assignments": [
      {
        "localDateTime": "2023-10-18T11:30:00",
        "collaboratorId": 1,
        "taskId": 1,
        "_links": {
          "self": {
            "href": "http://localhost:8080/assignments/1"
          },
          "assignment": {
            "href": "http://localhost:8080/assignments/1"
          }
        }
      },
      {
        "localDateTime": "2023-10-19T14:15:00",
        "collaboratorId": 2,
        "taskId": 2,
        "_links": {
          "self": {
            "href": "http://localhost:8080/assignments/2"
          },
          "assignment": {
            "href": "http://localhost:8080/assignments/2"
          }
        }
      },
      {
        "localDateTime": "2023-10-20T09:45:00",
        "collaboratorId": 1,
        "taskId": 3,
        "_links": {
          "self": {
            "href": "http://localhost:8080/assignments/3"
          },
          "assignment": {
            "href": "http://localhost:8080/assignments/3"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "http://localhost:8080/assignments?page=0&size=20"
    },
    "profile": {
      "href": "http://localhost:8080/profile/assignments"
    }
  },
  "page": {
    "size": 20,
    "totalElements": 3,
    "totalPages": 1,
    "number": 0
  }
}
```


**Отримати всі `TaskComment`s**

```http request
GET http://localhost:8080/taskComments
```

Результат:
```json
{
  "_embedded": {
    "taskComments": [
      {
        "subject": "Comment for Task 1",
        "text": "Comment for Task 1",
        "localDateTime": "2023-11-07T21:20:53",
        "authorId": 1,
        "taskId": 1,
        "_links": {
          "self": {
            "href": "http://localhost:8080/taskComments/1"
          },
          "taskComment": {
            "href": "http://localhost:8080/taskComments/1"
          }
        }
      },
      {
        "subject": "Comment for Task 2",
        "text": "Comment for Task 2",
        "localDateTime": "2023-11-07T21:20:53",
        "authorId": 2,
        "taskId": 2,
        "_links": {
          "self": {
            "href": "http://localhost:8080/taskComments/2"
          },
          "taskComment": {
            "href": "http://localhost:8080/taskComments/2"
          }
        }
      },
      {
        "subject": "Comment for Task 3",
        "text": "Comment for Task 3",
        "localDateTime": "2023-11-07T21:20:53",
        "authorId": 3,
        "taskId": 3,
        "_links": {
          "self": {
            "href": "http://localhost:8080/taskComments/3"
          },
          "taskComment": {
            "href": "http://localhost:8080/taskComments/3"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "http://localhost:8080/taskComments?page=0&size=20"
    },
    "profile": {
      "href": "http://localhost:8080/profile/taskComments"
    }
  },
  "page": {
    "size": 20,
    "totalElements": 3,
    "totalPages": 1,
    "number": 0
  }
}
```

### Test 2: отримати один

**Отримати `Assignment`**

```http request
GET http://localhost:8080/assignments/1
```

Результат:
```json
{
  "localDateTime": "2023-10-18T11:30:00",
  "collaboratorId": 1,
  "taskId": 1,
  "_links": {
    "self": {
      "href": "http://localhost:8080/assignments/1"
    },
    "assignment": {
      "href": "http://localhost:8080/assignments/1"
    }
  }
}
```

**Отримати `TaskComment`**

```http request
GET http://localhost:8080/taskComments/1
```

Результат:
```json
{
  "subject": "Comment for Task 1",
  "text": "Comment for Task 1",
  "localDateTime": "2023-11-07T21:20:53",
  "authorId": 1,
  "taskId": 1,
  "_links": {
    "self": {
      "href": "http://localhost:8080/taskComments/1"
    },
    "taskComment": {
      "href": "http://localhost:8080/taskComments/1"
    }
  }
}
```

### Test 3: створити новий

**Створимо новий `Assignment`:**

```http request
POST http://localhost:8080/assignments
Content-Type: application/json

{
  "localDateTime": "2023-11-08T21:04:00",
  "collaboratorId": 1,
  "taskId": 2
}
```

Результат (пошлемо запит):
```http request
GET http://localhost:8080/assignments/4
```

Відповідь:
```json
{
  "localDateTime": "2023-11-08T21:04:00",
  "collaboratorId": 1,
  "taskId": 2,
  "_links": {
    "self": {
      "href": "http://localhost:8080/assignments/4"
    },
    "assignment": {
      "href": "http://localhost:8080/assignments/4"
    }
  }
}
```

**Створимо новий `TaskComment`:**
```http request
POST http://localhost:8080/taskComments
Content-Type: application/json

{
  "subject": "TEST SUBJECT",
  "text": "TEXT",
  "localDateTime": "2023-11-08T21:04:00",
  "authorId": 2,
  "taskId": 2
}
```

Результат (пошлемо запит):
```http request
GET http://localhost:8080/taskComments/4
```

Відповідь:
```json
{
  "subject": "TEST SUBJECT",
  "text": "TEXT",
  "localDateTime": "2023-11-08T21:04:00",
  "authorId": 2,
  "taskId": 2,
  "_links": {
    "self": {
      "href": "http://localhost:8080/taskComments/4"
    },
    "taskComment": {
      "href": "http://localhost:8080/taskComments/4"
    }
  }
}
```

### Test 4: змінити поле

**Змінимо `Assignment`:**

```http request
PATCH http://localhost:8080/assignments
Content-Type: application/json

{
  "localDateTime": "2024-01-01T00:00:00"
}
```

Результат (пошлемо запит):
```http request
GET http://localhost:8080/assignments/4
```

Відповідь:
```json
{
  "localDateTime": "2024-01-01T00:00:00",
  "collaboratorId": 1,
  "taskId": 2,
  "_links": {
    "self": {
      "href": "http://localhost:8080/assignments/4"
    },
    "assignment": {
      "href": "http://localhost:8080/assignments/4"
    }
  }
}
```

**Змінимо `TaskComment`:**
```http request
POST http://localhost:8080/taskComments
Content-Type: application/json

{
  "text": "Андрій Болдак найкращий викладач!!!"
}
```

Результат (пошлемо запит):
```http request
GET http://localhost:8080/taskComments/4
```

Відповідь:
```json
{
  "subject": "TEST SUBJECT",
  "text": "Андрій Болдак найкращий викладач!!!",
  "localDateTime": "2023-11-08T21:04:00",
  "authorId": 2,
  "taskId": 2,
  "_links": {
    "self": {
      "href": "http://localhost:8080/taskComments/4"
    },
    "taskComment": {
      "href": "http://localhost:8080/taskComments/4"
    }
  }
}
```


### Test 5: видалити

```http request
DELETE http://localhost:8080/assignments/4
```

Результат (пошлемо запит):
```http request
GET http://localhost:8080/assignments
```

Відповідь:
```json
{
  "_embedded": {
    "assignments": [
      {
        "localDateTime": "2023-10-18T11:30:00",
        "collaboratorId": 1,
        "taskId": 1,
        "_links": {
          "self": {
            "href": "http://localhost:8080/assignments/1"
          },
          "assignment": {
            "href": "http://localhost:8080/assignments/1"
          }
        }
      },
      {
        "localDateTime": "2023-10-19T14:15:00",
        "collaboratorId": 2,
        "taskId": 2,
        "_links": {
          "self": {
            "href": "http://localhost:8080/assignments/2"
          },
          "assignment": {
            "href": "http://localhost:8080/assignments/2"
          }
        }
      },
      {
        "localDateTime": "2023-10-20T09:45:00",
        "collaboratorId": 1,
        "taskId": 3,
        "_links": {
          "self": {
            "href": "http://localhost:8080/assignments/3"
          },
          "assignment": {
            "href": "http://localhost:8080/assignments/3"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "http://localhost:8080/assignments?page=0&size=20"
    },
    "profile": {
      "href": "http://localhost:8080/profile/assignments"
    }
  },
  "page": {
    "size": 20,
    "totalElements": 3,
    "totalPages": 1,
    "number": 0
  }
}
```

```http request
DELETE http://localhost:8080/taskComments/4
```

Результат (пошлемо запит):
```http request
GET http://localhost:8080/taskComments/4
```

Відповідь:
```json
{
  "_embedded": {
    "taskComments": [
      {
        "subject": "Comment for Task 1",
        "text": "Comment for Task 1",
        "localDateTime": "2023-11-07T21:20:53",
        "authorId": 1,
        "taskId": 1,
        "_links": {
          "self": {
            "href": "http://localhost:8080/taskComments/1"
          },
          "taskComment": {
            "href": "http://localhost:8080/taskComments/1"
          }
        }
      },
      {
        "subject": "Comment for Task 2",
        "text": "Comment for Task 2",
        "localDateTime": "2023-11-07T21:20:53",
        "authorId": 2,
        "taskId": 2,
        "_links": {
          "self": {
            "href": "http://localhost:8080/taskComments/2"
          },
          "taskComment": {
            "href": "http://localhost:8080/taskComments/2"
          }
        }
      },
      {
        "subject": "Comment for Task 3",
        "text": "Comment for Task 3",
        "localDateTime": "2023-11-07T21:20:53",
        "authorId": 3,
        "taskId": 3,
        "_links": {
          "self": {
            "href": "http://localhost:8080/taskComments/3"
          },
          "taskComment": {
            "href": "http://localhost:8080/taskComments/3"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "http://localhost:8080/taskComments?page=0&size=20"
    },
    "profile": {
      "href": "http://localhost:8080/profile/taskComments"
    }
  },
  "page": {
    "size": 20,
    "totalElements": 3,
    "totalPages": 1,
    "number": 0
  }
}
```

