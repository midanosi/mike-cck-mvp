/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("seai17va0nywcwi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnktupmv",
    "name": "is_admin",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("seai17va0nywcwi")

  // remove
  collection.schema.removeField("tnktupmv")

  return dao.saveCollection(collection)
})
