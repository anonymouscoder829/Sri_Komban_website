$vehicles = @(
  @{ Name = "sedan.jpg"; Url = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80" },
  @{ Name = "innova.jpg"; Url = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80" },
  @{ Name = "tempo.jpg"; Url = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80" },
  @{ Name = "coach.jpg"; Url = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80" },
  @{ Name = "madurai-heritage.jpg"; Url = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80" }
)

foreach ($v in $vehicles) {
  $target = "k:\Travels_Website\images\" + $v.Name
  Write-Host "Downloading $($v.Name)..."
  try {
    Invoke-WebRequest -Uri $v.Url -OutFile $target -UserAgent "Mozilla/5.0"
  } catch {
    Write-Warning "Failed $($v.Name): $_"
  }
}
Get-ChildItem "k:\Travels_Website\images\"
