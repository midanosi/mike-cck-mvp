/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o9524p5derkkg3x")

  collection.name = "meal_client"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o9524p5derkkg3x")

  collection.name = "client"

  return dao.saveCollection(collection)
})
