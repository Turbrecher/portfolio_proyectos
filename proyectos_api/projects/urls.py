from rest_framework import routers
from django.urls import path, include
from projects import views

router = routers.DefaultRouter()
router.register('projects', views.ProjectViewSet, 'projects')

urlpatterns = [
    path('projects/', include(router.urls))
]
