/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59")

  collection.name = "meal_recipient"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2t6gtt0gq6g5m59")

  collection.name = "meal_client"

  return dao.saveCollection(collection)
})
