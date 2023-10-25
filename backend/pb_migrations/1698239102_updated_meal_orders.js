/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgss6gksktkmaob")

  collection.name = "meal_order"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgss6gksktkmaob")

  collection.name = "meal_orders"

  return dao.saveCollection(collection)
})
