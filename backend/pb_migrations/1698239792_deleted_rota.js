/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9q6z0s7sasehdw4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9q6z0s7sasehdw4",
    "created": "2023-10-03 15:55:03.323Z",
    "updated": "2023-10-25 13:04:31.302Z",
    "name": "rota",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gc9o9w2c",
        "name": "volunteer",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "2oqypd9s",
        "name": "role",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "deliverer",
            "cook_lead",
            "cook",
            "admin",
            "remote_admin"
          ]
        }
      },
      {
        "system": false,
        "id": "rzeu30ak",
        "name": "day",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
