# Generated by Django 3.1.2 on 2020-11-05 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fundaccountservice', '0002_fundaccounts_wechatid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fundaccounts',
            name='password',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
