/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dl6n9zjf",
    "name": "would_like_food_on_these_days",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Thursday",
        "Sunday"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dl6n9zjf",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Thursday",
        "Sunday"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
