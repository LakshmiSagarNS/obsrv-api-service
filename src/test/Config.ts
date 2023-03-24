import { routesConfig } from "../configs/RoutesConfig"
const config = {
  apiStatusEndPoint: "/obsrv/status",
  apiHealthEndPoint: "/obsrv/health",
  apiDruidEndPoint: `${routesConfig.query.native_query.path}`,
  apiDruidSqlEndPoint: `${routesConfig.query.sql_query.path}`,
  apiDatasetIngestEndPoint: `${routesConfig.data_ingest.path}`,
  apiDatasetSaveEndPoint: `${routesConfig.config.dataset.save.path}`,
  apiDatasetUpdateEndPoint: `${routesConfig.config.dataset.update.path}`,
  apiDatasetReadEndPoint: `${routesConfig.config.dataset.read.path}`,
  apiDatasetListEndPoint: `${routesConfig.config.dataset.list.path}`,
  apiDatasetPresetEndPoint: `${routesConfig.config.dataset.preset.path}`,
  apiDatasourceSaveEndPoint: `${routesConfig.config.datasource.save.path}`,
  apiDatasourceUpdateEndPoint: `${routesConfig.config.datasource.update.path}`,
  apiDatasourceReadEndPoint: `${routesConfig.config.datasource.read.path}`,
  apiDatasourceListEndPoint: `${routesConfig.config.datasource.list.path}`,
  apiDatasourcePresetEndPoint: `${routesConfig.config.datasource.preset.path}`,




  druidHost: "http://localhost",
  druidPort: 8888,
  druidEndPoint: "/druid/v2",
  druidSqlEndPoint: "/druid/v2/sql/"
};
export { config };
