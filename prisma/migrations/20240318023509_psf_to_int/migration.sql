-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PriceReport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" INTEGER NOT NULL,
    "psf" INTEGER NOT NULL DEFAULT 0,
    "date" DATETIME NOT NULL,
    "apartmentId" INTEGER NOT NULL,
    CONSTRAINT "PriceReport_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "Apartment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PriceReport" ("apartmentId", "date", "id", "price", "psf") SELECT "apartmentId", "date", "id", "price", "psf" FROM "PriceReport";
DROP TABLE "PriceReport";
ALTER TABLE "new_PriceReport" RENAME TO "PriceReport";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
