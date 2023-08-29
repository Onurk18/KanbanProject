using FluentMigrator;
using Serenity.Extensions;
using System;

namespace KanbanProject.Migrations.DefaultDB
{
    [Migration(20230829110000)]
    public class DefaultDB_20230829_110000_Kanban : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("Kanban");

            Create.Table("Task").InSchema("Kanban")
                .WithColumn("TaskId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Title").AsString(50).NotNullable()
                .WithColumn("StatusId").AsInt32().Nullable()
                .WithColumn("Summary").AsString(200).Nullable()
                .WithColumn("Assignee").AsInt32().Nullable()
                .WithColumn("TypeId").AsInt32().Nullable()
                .WithColumn("PriorityId").AsInt32().Nullable()
                .WithColumn("Estimate").AsInt32().Nullable()
                .WithColumn("Date").AsInt32().Nullable();
        }
    }
}