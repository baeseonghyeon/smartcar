# Generated by Django 2.2.3 on 2019-08-07 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0021_auto_20190808_0112'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carinfo',
            name='car_arrive_time',
            field=models.CharField(default='', max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='carinfo',
            name='car_destination_distance',
            field=models.CharField(default='', max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='carinfo',
            name='car_now_situation',
            field=models.CharField(default='', max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='carinfo',
            name='car_route',
            field=models.CharField(default='', max_length=10000),
        ),
        migrations.AlterField(
            model_name='carinfo',
            name='car_speed',
            field=models.CharField(default='', max_length=1000, null=True),
        ),
    ]
