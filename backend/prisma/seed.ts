import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create Departments
  const admin = await prisma.department.create({
    data: { name: "Administration" }
  });

  const audit = await prisma.department.create({
    data: { name: "Audit" }
  });

  const banking = await prisma.department.create({
    data: { name: "Banking Operations" }
  });

  // Create Roles
  const manager = await prisma.role.create({
    data: { title: "Manager" }
  });

  const analyst = await prisma.role.create({
    data: { title: "Analyst" }
  });

  const clerk = await prisma.role.create({
    data: { title: "Clerk" }
  });

  // Create Employees
  await prisma.employee.createMany({
    data: [
      {
        firstName: "Zoë",
        lastName: "Robins",
        departmentId: admin.id,
        roleId: manager.id
      },
      {
        firstName: "Madeleine",
        lastName: "Madden",
        departmentId: admin.id,
        roleId: analyst.id
      },
      {
        firstName: "Josha",
        lastName: "Sadowski",
        departmentId: audit.id,
        roleId: analyst.id
      },
      {
        firstName: "Kate",
        lastName: "Fleetwood",
        departmentId: audit.id,
        roleId: manager.id
      },
      {
        firstName: "Priyanka",
        lastName: "Bose",
        departmentId: banking.id,
        roleId: clerk.id
      }
    ]
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });