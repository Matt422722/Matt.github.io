from django.db import models

#function to create University campus class
class UniversityCampus(models.Model):
    Campus_name = models.CharField(max_length=60, default="", blank=True, null=False)
    Campus_ID = models.IntegerField(default="", blank=True, null=False)
    State = models.CharField(max_length=2, default="", blank=True, null=False)

    #Creates model manager
    object = models.Manager()

    class Meta:
        verbose_name_plural = "University Campus"
