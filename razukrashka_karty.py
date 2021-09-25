import pandas as pd
import plotly.graph_objects as go


df = pd.read_csv('regions_pos.csv')
df.head()

fig = go.Figure(go.Scattermapbox(
    mode = "markers",
    lon = df['lon'],
    lat = df['lat'],
    text = df['name'] + ": " + (df['count']).astype(str),
    marker = {'size': df['count'] / 5, 'color': df['count'], 'sizemode' : 'area'}))
    
#fig = go.Figure(go.Scattergeo(
        #lon = df['lon'],
        #lat = df['lat'],
        #text = df['name'] + "\n " + (df['count']).astype(str),
        #marker = dict(
            #size = df['count']/20,
            #color = df['count'],
            #line_color='rgb(40,40,40)',
            #line_width=0.5,S
            #sizemode = 'area'
        #)))

fig.update_layout(
    mapbox = {
        'style': "open-street-map",
        'center': { 'lat': 57.21593, 'lon': 53.204843},
        'zoom': 8
            },
    margin = {'l':0, 'r':0, 'b':0, 't':0})

fig.show()