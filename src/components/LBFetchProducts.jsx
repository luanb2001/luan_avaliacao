import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  
  const LBFetchProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const url = "https://dummyjson.com/products/search?q=shoes";
  
    useEffect(() => {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((respData) => {
          console.log(respData);
          setData(respData.products);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }, []);
  
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Nossos Produtos</h1>
      <Grid container spacing={4}>
          
        {isLoading ? (
          <div>Carregando</div>
        ) : (
          data.map((produto) => (
            <Grid
              item={true}
              xs={12}
              md={6}
              lg={2}
              display="flex"
              alignItems="stretch"
              key={produto.id}
            >
              <Card
                key={produto.id}
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "stretch",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={produto.thumbnail}
                  alt={produto.brand}
                />
                <CardContent style={{ display: "flex", flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {produto.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {produto.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Compartilhar</Button>
                  <Button size="small">Conheça mais</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
      </div>
    );
  };
  
  export default LBFetchProducts;