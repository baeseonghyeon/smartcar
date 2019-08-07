# Generated by Django 2.2.3 on 2019-08-07 11:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_auto_20190807_1953'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carinfo',
            name='car_route',
            field=models.CharField(default='', max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='carinfo',
            name='container_id',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='main.ContainerInfo', unique=True),
        ),
        migrations.AlterField(
            model_name='carinfo',
            name='pi_id',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.CASCADE, to='main.PiInfo', unique=True),
        ),
    ]
