/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o9524p5derkkg3x");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "o9524p5derkkg3x",
    "created": "2023-10-03 15:46:41.826Z",
    "updated": "2023-10-25 13:07:20.568Z",
    "name": "meal_client",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "leefqvwg",
        "name": "phone_number",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
