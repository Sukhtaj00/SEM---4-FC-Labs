/*
  Warnings:

  - You are about to drop the column `employeeId` on the `Role` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_employeeId_fkey";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "roleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "employeeId";

-- CreateIndex
CREATE UNIQUE INDEX "Role_title_key" ON "Role"("title");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
