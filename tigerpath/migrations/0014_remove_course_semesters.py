# Generated by Django 2.0.3 on 2018-04-27 04:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tigerpath', '0013_course_all_semesters'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='semesters',
        ),
    ]
