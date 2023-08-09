import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_weather(request):
    city = request.GET.get('city')
    if not city:
        return Response({'error': 'City parameter is required'}, status=400)

    # Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=36801e90a1902dd762fb836a73b79122'
    
    response = requests.get(url)
    data = response.json()

    weather_data = {
        'city': data['name'],
        'current': {
            'temp': data['main']['temp'],
            'feels_like': data['main']['feels_like'],
            'pressure': data['main']['pressure'],
            'humidity': data['main']['humidity'],
            'description': data['weather'][0]['description'],
        },
        'wind': {
            'speed': data['wind']['speed'],
            'deg': data['wind']['deg'],
        },
        'clouds': {
            'all': data['clouds']['all'],
        },
        'sys': {
            'country': data['sys']['country'],
            'sunrise': data['sys']['sunrise'],
            'sunset': data['sys']['sunset'],
        },
        'timezone': data['timezone'],
    }

    return Response(weather_data)
