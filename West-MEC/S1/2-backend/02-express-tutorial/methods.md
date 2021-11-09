/ is the homepage for the website and /api/v1 is the homepage for the api

| Parameter               | Description                                                                         | Type    |
| ----------------------- | ----------------------------------------------------------------------------------- | ------- |
| api/v1/id:id            | Allows the user to enter the the id of the dish and get back                        | integer |
| api/v1/query?           | Allows the user to enter two tags to get a result. Tags are (search) and (price)    | string  |
| api/v1/query?search=    | Allows the user to get the category of food from their search result                | string  |
| api/v1/query?price=     | Allows the user to enter two results to sort by price. Results are (high) and (low) | string  |
| api/v1/query?price=high | Allows the price to be sorted by highest first                                      | string  |
| api/v1/query?price=low  | Allows the price to be sorted by lowest first                                       | string  |
