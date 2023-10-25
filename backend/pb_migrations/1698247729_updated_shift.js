/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ojnliy6nppwclbn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qsbtaq4w",
    "name": "dish_of_the_day",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "didpabgae2unssp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ojnliy6nppwclbn")

  // remove
  collection.schema.removeField("qsbtaq4w")

  return dao.saveCollection(collection)
})
