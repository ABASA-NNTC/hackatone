import pandas as pd
import plotly.graph_objects as go

reg_pos_df = pd.read_csv('regions_pos.csv')
reg_data_df = pd.read_csv('regions_data.csv')

data_column = 1

fig = go.Figure(go.Scattermapbox(
    mode="markers",
    lon=reg_pos_df['lon'],
    lat=reg_pos_df['lat'],
    text=reg_pos_df['name'] + ": " + (reg_data_df[str(data_column)]).astype(str),
    marker={
        'size': abs(reg_data_df[str(data_column)] / 5),
        'color': reg_data_df[str(data_column)],
        'sizemode': 'area',
        'sizemin': 5,
        'colorscale': [[0, 'rgb(25,125,0)'], [1, 'rgb(255,25,0)']]
    }))


fig.update_layout(
    mapbox={
        'style': "open-street-map",
        'center': {'lat': 57.21593, 'lon': 53.204843},
        'zoom': 8
    },
    margin={'l': 0, 'r': 0, 'b': 0, 't': 0})

fig.show()