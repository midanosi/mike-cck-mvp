/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8ru2mkcf3cermt3",
    "created": "2023-10-25 15:46:08.838Z",
    "updated": "2023-10-25 15:46:08.838Z",
    "name": "volunteer_stats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kkx5xbqi",
        "name": "deliver_count",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
      "query": "SELECT count(shift.id) as deliver_count, user.id as id FROM shift, user WHERE shift.rider_arbury = user.email"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8ru2mkcf3cermt3");

  return dao.deleteCollection(collection);
})
