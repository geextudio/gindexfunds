# Generated by Django 3.1.2 on 2020-11-05 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fundaccountservice', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fundaccounts',
            name='wechatid',
            field=models.CharField(default='', max_length=100),
        ),
    ]