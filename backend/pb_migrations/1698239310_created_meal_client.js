/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2t6gtt0gq6g5m59",
    "created": "2023-10-25 13:08:30.932Z",
    "updated": "2023-10-25 13:08:30.932Z",
    "name": "meal_client",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cq5f2r1b",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "seai17va0nywcwi",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59");

  return dao.deleteCollection(collection);
})
