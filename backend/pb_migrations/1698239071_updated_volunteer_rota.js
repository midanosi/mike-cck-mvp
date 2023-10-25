/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9q6z0s7sasehdw4")

  collection.name = "rota"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9q6z0s7sasehdw4")

  collection.name = "volunteer_rota"

  return dao.saveCollection(collection)
})
