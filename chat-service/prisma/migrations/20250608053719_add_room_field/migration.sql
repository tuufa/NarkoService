/*
  Warnings:

  - You are about to drop the column `username` on the `Message` table. All the data in the column will be lost.
  - Added the required column `senderId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "username",
ADD COLUMN     "room" TEXT,
ADD COLUMN     "senderId" INTEGER NOT NULL;
