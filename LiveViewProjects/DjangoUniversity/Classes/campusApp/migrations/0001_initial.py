# Generated by Django 5.1.3 on 2024-11-26 08:13

import django.db.models.manager
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UniversityCampus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Campus_name', models.CharField(blank=True, default='', max_length=60)),
                ('Campus_ID', models.IntegerField(blank=True, default='')),
                ('State', models.CharField(blank=True, default='', max_length=2)),
            ],
            options={
                'verbose_name_plural': 'University Campus',
            },
            managers=[
                ('object', django.db.models.manager.Manager()),
            ],
        ),
    ]
