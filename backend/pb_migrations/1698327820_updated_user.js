/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("seai17va0nywcwi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svsk2wcs",
    "name": "volunteer",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5lxsy1fc87lccsn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0tymgfum",
    "name": "meal_recipient",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2t6gtt0gq6g5m59",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("seai17va0nywcwi")

  // remove
  collection.schema.removeField("svsk2wcs")

  // remove
  collection.schema.removeField("0tymgfum")

  return dao.saveCollection(collection)
})
