-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Apartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unit" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "sqf" INTEGER NOT NULL DEFAULT 0,
    "buildingId" INTEGER NOT NULL,
    CONSTRAINT "Apartment_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Apartment" ("buildingId", "id", "type", "unit") SELECT "buildingId", "id", "type", "unit" FROM "Apartment";
DROP TABLE "Apartment";
ALTER TABLE "new_Apartment" RENAME TO "Apartment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
