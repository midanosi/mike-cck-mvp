/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ojnliy6nppwclbn")

  collection.name = "shift"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ojnliy6nppwclbn")

  collection.name = "rota"

  return dao.saveCollection(collection)
})
