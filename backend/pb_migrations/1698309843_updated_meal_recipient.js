/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59")

  // remove
  collection.schema.removeField("ds07cs9c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwrxeody",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ds07cs9c",
    "name": "phone_number",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("lwrxeody")

  return dao.saveCollection(collection)
})
