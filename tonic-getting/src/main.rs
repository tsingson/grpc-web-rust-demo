use http::{header, Method};

use tonic::transport::Server;
use tonic_getting::grpc::make_grpc_routes;
use tower_http::cors::{AllowHeaders, AllowMethods, AllowOrigin, CorsLayer};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
  tracing_subscriber::fmt::init();

  let grpc_addr = "0.0.0.0:9999".parse()?;
  println!("The gRPC Server listening to {}", grpc_addr);

  let cors_layer = CorsLayer::new().allow_origin(AllowOrigin::any())
                                   .allow_headers(AllowHeaders::any())
                                   .allow_methods(AllowMethods::list(vec![Method::GET, Method::POST]));

  Server::builder().accept_http1(true)
                   .layer(cors_layer)
                   .layer(tonic_web::GrpcWebLayer::new())
                   .add_routes(make_grpc_routes())
                   .serve(grpc_addr)
                   .await?;

  Ok(())
}
