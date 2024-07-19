-- DropForeignKey
ALTER TABLE "prodimage" DROP CONSTRAINT "prodimage_prodId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_store_id_fkey";

-- DropForeignKey
ALTER TABLE "product_attribute" DROP CONSTRAINT "product_attribute_id_fkey";

-- DropForeignKey
ALTER TABLE "productbranch" DROP CONSTRAINT "productbranch_branchId_fkey";

-- DropForeignKey
ALTER TABLE "productbranch" DROP CONSTRAINT "productbranch_productId_fkey";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productbranch" ADD CONSTRAINT "productbranch_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productbranch" ADD CONSTRAINT "productbranch_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prodimage" ADD CONSTRAINT "prodimage_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_attribute" ADD CONSTRAINT "product_attribute_id_fkey" FOREIGN KEY ("id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
