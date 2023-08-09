import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_weather(request):
    city = request.GET.get('city')
    if not city:
        return Response({'error': 'City parameter is required'}, status=400)

    # Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid=36801e90a1902dd762fb836a73b79122'
    
    response = requests.get(url)
    data = response.json()
    
    return Response(data)
